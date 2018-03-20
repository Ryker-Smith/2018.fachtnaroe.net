<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'fachtnaroe.net_wordpress');

/** MySQL database username */
define('DB_USER', 'wp.fachtnaroenet');

/** MySQL database password */
define('DB_PASSWORD', 'frnet_01gh2_');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'm62-^Ba[b?N[9`0dy3-2IAB$QuV6D]h*j05k%{=&UO&BRx0`M9ABv(84RMSPJ3#Y');
define('SECURE_AUTH_KEY',  'b.t+gd,5LFd>m8Wj|2Rz3dl r:H2{@{m$l;-3#I^ofm?Y40BZm<duWER?Srv@H%!');
define('LOGGED_IN_KEY',    'r+[&m-of6&/X[$n]TtcVV/q }6NtZ)4bgjjmWqIo)Wj|m2?5GfzH 8IeAHdXR^Qc');
define('NONCE_KEY',        '>v3%#xN=j#xJncxV/c!k~,.dwi!~+IC5pA~&PL,kYnSLh2=xq(T.5f{60R_``XKz');
define('AUTH_SALT',        'n3)fw(N9T|&2eweWT$%HO.w4^[qb?Yec4mv`Q!sVWgNn0ct^OM[Ic&^LWTh<5CNn');
define('SECURE_AUTH_SALT', 'vN:Pb9yI_5[NYBym!&y1S7o0Fhj!<iV3QLDhU6#Y!_d8MR9~eA<F(LW9zhl$/4qL');
define('LOGGED_IN_SALT',   'iW.@!0)w&n+&y#7Qz8G7/`7|Hjc2 q8Ur8$j6VxVFLCI;4KE>.rB7WX*`<Tv2CY.');
define('NONCE_SALT',       'Tv;g7dGLj A$:S3HeLi+C#?QC9I(@1H?W9Bkb;6bVN^8.M69?+C&UuFskc<ylj(N');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'fr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
